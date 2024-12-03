from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)
app.secret_key = 'kali@123'  # Change this to a random secret key

# Database setup (Create table if not exists)
def create_database():
    conn = sqlite3.connect('flamingo.db')
    cursor = conn.cursor()
    cursor.execute('''
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

# Routes
@app.route('/')
def home():
    return 'Welcome to Flamingo!'

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        subject = request.form['subject']
        message = request.form['message']

        # Save to database
        conn = sqlite3.connect('flamingo.db')
        cursor = conn.cursor()
        cursor.execute('''
        INSERT INTO contact_messages (name, email, phone, subject, message) 
        VALUES (?, ?, ?, ?, ?)
        ''', (name, email, phone, subject, message))
        conn.commit()
        conn.close()
        return 'Message submitted successfully!'
    return render_template('contact.html')

if __name__ == '__main__':
    create_database()
    app.run(debug=True)
