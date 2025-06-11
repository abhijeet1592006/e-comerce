from flask import Flask,redirect,render_template,session,request

from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)

app.secret_key="hello"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"

db=SQLAlchemy(app)


@app.route("/")
def main():
    return render_template("index.html")

