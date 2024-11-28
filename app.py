from flask import Flask, render_template, request, redirect, url_for, session, flash
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'kali@123'  # Change this to a random secret key

# Function to get a database connection
def get_db_connection():
    conn = sqlite3.connect('flamingo.db')  # Database file
    conn.row_factory = sqlite3.Row  # This allows us to access columns by name
    return conn

# Create the users table if it doesn't exist
def init_db():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        hashed_password = generate_password_hash(password)

        # Check if the user already exists
        conn = get_db_connection()
        if conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone():
            flash('Email already exists!')
            conn.close()
            return redirect(url_for('signup'))

        # Insert the new user into the database
        conn.execute('INSERT INTO users (email, password) VALUES (?, ?)', (email, hashed_password))
        conn.commit()
        conn.close()
        flash('Signup successful! Please login.')
        return redirect(url_for('home'))

    return render_template('signup.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    
    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
    conn.close()

    if user and check_password_hash(user['password'], password):
        session['user'] = email
        flash('Login successful!')
        return redirect(url_for('home'))  # Redirect to a dashboard or home page
    else:
        flash('Invalid email or password.')
        return redirect(url_for('home'))

@app.route('/logout')
def logout():
    session.pop('user', None)
    flash('You have been logged out.')
    return redirect(url_for('home'))

if __name__ == '__main__':
    init_db()  # Create the database and table if they don't exist
    app.run(debug=True)