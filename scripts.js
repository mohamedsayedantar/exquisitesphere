/* General Styles */
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden; /* Prevent horizontal scrollbar */
}

.container {
    width: 80%;
    margin: 0 auto;
    padding: 60px 0;
    max-width: 1200px;
}

h2 {
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 40px;
    color: #222;
    position: relative;
    padding-bottom: 15px;
}

h2::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 50px;
    height: 3px;
    background-color: #007bff;
    transform: translateX(-50%);
}

.button {
    display: inline-block;
    padding: 12px 30px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
}

/* Preloader */
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #007bff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Header */
header {
    background-color: #fff;
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
.CompName  { 
    font-size: 1.5em;
    color: #222;
    text-decoration: none;
    font-weight: bold;
}
/* Style the logo image directly */
.logo a img {
    max-height: 80px; /* Adjust the maximum height as needed */
    display: block; /* Remove extra space below the image */
}

.logo a {
    font-size: 1.3em;
    color: #222;
    text-decoration: none;
    font-weight: bold;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav li {
    margin-left: 30px;
}

nav a {
    text-decoration: none;
    color: #555;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #007bff;
}

.hamburger {
    display: none;
    font-size: 1.5em;
    cursor: pointer;
}

/* Hero Section */
.hero {
    background-color: #f0f8ff;
    padding: 50px 100px;
    display: flex;
    align-items: center;
}

.hero-content {
    flex: 1;
    padding-right: 30px;
    animation: fadeInUp 1s ease-out;
}

.hero-content h1 {
    font-size: 3em;
    margin-bottom: 20px;
    color: #222;
}

.hero-content p {
    font-size: 1.2em;
    color: #555;
    margin-bottom: 30px;
}

.hero-image {
    flex: 1;
    text-align: center;
    animation: fadeIn 1.5s ease-out;
}

.hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
}

/* Services Section */
.services {
    background-color: #fff;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    text-align: center;
}

.service-item {
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
}

.service-item i {
    font-size: 2em;
    color: #007bff;
    margin-bottom: 15px;
}

.service-item h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #333;
}

.service-item p {
    color: #777;
}

/* Portfolio Section */
.portfolio {
    background-color: #f4f4f4;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
}

.portfolio-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
}

.portfolio-item:hover img {
    transform: scale(1.1);
}

.portfolio-item .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.portfolio-item:hover .overlay {
    opacity: 1;
}

.portfolio-item .overlay h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.portfolio-item .overlay a {
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 8px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.portfolio-item .overlay a:hover {
    background-color: #fff;
    color: #007bff;
}

.load-more {
    display: block;
    margin: 40px auto 0;
}

/* Why Choose Us Section */
.why-us {
    background-color: #fff;
}

.why-us-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.why-us-item {
    padding: 30px;
    border: 1px solid #eee;
    border-radius: 8px;
    text-align: center;
}

.why-us-item i {
    font-size: 2em;
    color: #007bff;
    margin-bottom: 15px;
}

.why-us-item h3 {
    font-size: 1.3em;
    margin-bottom: 10px;
    color: #333;
}

.why-us-item p {
    color: #777;
}

/* Contact Section */
.contact {
    background-color: #f0f8ff;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
}

.contact-info {
    margin-top: 30px;
    text-align: center;
    color: #555;
}

.contact-info p {
    margin-bottom: 10px;
}

.contact-info i {
    margin-right: 10px;
}

/* Footer */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    font-size: 0.9em;
}

/* Animations (CSS) */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        width: 90%;
        padding: 40px 0;
    }

    h2 {
        font-size: 2em;
        margin-bottom: 30px;
    }

    /* Header */
    header .container {
        flex-direction: column;
        align-items: flex-start;
    }

    .logo {
        margin-bottom: 15px;
    }

    nav {
        display: none;
        width: 100%;
        margin-top: 10px;
    }

    nav ul {
        flex-direction: column;
        text-align: center;
    }

    nav li {
        margin: 10px 0;
    }

    .hamburger {
        display: block;
    }

    /* Hero Section */
    .hero {
        flex-direction: column;
        padding: 80px 0;
        text-align: center;
    }

    .hero-content {
        padding-right: 0;
        margin-bottom: 30px;
    }

    .hero-content h1 {
        font-size: 2.5em;
    }

    .hero-image img {
        max-width: 80%;
    }

    /* Services Section */
    .services-grid {
        grid-template-columns: 1fr;
    }

    /* Portfolio Section */
    .portfolio-grid {
        grid-template-columns: 1fr;
    }

    /* Why Choose Us Section */
    .why-us-grid {
        grid-template-columns: 1fr;
    }
}
