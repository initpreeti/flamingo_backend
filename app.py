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

# Create the users and contact_messages tables if they don't exist
def init_db():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    ''')
    conn.execute('''
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/home')
def user_home():
    return render_template('home.html')  # Render the home.html page

@app.route('/about')
def about_us():
    return render_template('AboutUs.html')  # Render the AboutUs.html page

@app.route('/Feature')
def feature():
    return render_template('Feature.html')

@app.route('/course')
def Course():
    return render_template('course.html')

@app.route('/Biginer')
def biginer():
    return render_template('/biginer.html')

@app.route('/intermediate')
def intermediate():
    return render_template('/intermediate.html')

@app.route('/advance')
def advance():
    return render_template('/advance.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        subject = request.form['subject']
        message = request.form['message']
        
        # Save the contact message to the database
        conn = get_db_connection()
        conn.execute('INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
                     (name, email, phone, subject, message))
        conn.commit()
        conn.close()
        
        flash('Your message has been sent!', 'success')
        
        # Redirect to the referrer URL or home if not available
        referrer = session.get('referrer', url_for('user_home'))  # Default to home if no referrer
        return redirect(referrer)

    # Store the referrer URL in the session
    session['referrer'] = request.referrer
    return render_template('contact.html')  # Render the contact.html page

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
        return redirect(url_for('user_home'))  # Redirect to user home page
    else:
        flash('Invalid email or password.')
        return redirect(url_for('home'))

@app.route('/logout')
def logout():
    session.pop('user', None)
    flash('You have been logged out.')
    return redirect(url_for('home'))

if __name__ == '__main__':
    init_db()  # Create the database and tables if they don't exist
    app.run(debug=True)