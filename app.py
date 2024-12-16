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

@app.route('/basicVocabulary')
def basicvocab():
    return render_template('/Basic_Vocabulary.html')

@app.route('/grammer')
def grammer():
    return render_template('/grammar.html')

@app.route('/greeting')
def greeting():
    return render_template('/greeting.html')

@app.route('/lessonAlphabet')
def lesson():
    return render_template('/lesson-alphabet.html')

@app.route('/realLifeScenarios')
def reallife():
    return render_template('/real-life-scenarios.html')

@app.route('/alphaquiz')
def alphaquiz():
    return render_template('/alphabet-quiz.html')

@app.route('/vocabquiz')
def vocabquiz():
    return render_template('/vocabulary-quiz.html')

@app.route('/basicgrammer')
def basicgrammer():
    return render_template('/basic-grammar.html')

@app.route('/basicverb')
def basicverb():
    return render_template('/basic-verb.html')

@app.route('/basicatjective')
def basicadjective():
    return render_template('/basic-adjective.html')

@app.route('/scenario-dining')
def scenariodining():
    return render_template('/scenario-dining.html')

@app.route('/scenariomarket')
def scenariomarket():
    return render_template('/scenario-market.html')

@app.route('/scenariomeeting')
def scenariomeeting():
    return render_template('/scenario-meeting-new.html')

@app.route('/scenarioshooping')
def scenarioshooping():
    return render_template('/scenario-shopping.html')

@app.route('/scenariotravel')
def scenariotravel():
    return render_template("/scenario-travel.html")

@app.route('/scenario-traveling')
def scenariotraveling():
    return render_template('/scenario-traveling.html')

@app.route('/sentence-structure')
def scentencestructure():
    return render_template('/sentence-structure.html')

@app.route('/basicarticels')
def basicarticels():
    return render_template('/basic-articles.html')

@app.route('/conversation')
def conversation():
    return render_template('/conversation.html')

@app.route('/everyday')
def everyday():
    return render_template('/everyday.html')

@app.route('/intermediate-quiz')
def intermediatequiz():
    return render_template('/intermediate-quiz.html')

@app.route('/advancegrammer')
def advancegrammer():
    return render_template('/Advancegrammar.html')

@app.route('/vocabexpension')
def vocabexpension():
    return render_template('/vocabulary-expansion.html')

@app.route('/writing-practice')
def writingpractice():
    return render_template('/writing-practice.html')

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