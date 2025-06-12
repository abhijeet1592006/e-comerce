from flask import Flask,redirect,render_template,session,request

from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)

app.secret_key="hello"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"

db=SQLAlchemy(app)

class Customer_data(db.Model):
    __tableName__="customer_data"
    uid=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(25),nullable=False)
    password=db.Column(db.String(25),nullable=False)
    orders=db.Column(db.String(50),nullable=True)
    phone_no=db.Column(db.Integer,nullable=True)
    address=db.Column(db.String(100),nullable=False)

class Product(db.Model):
    __tableName__="Product"
    
    pid=db.Column(db.Integer,primary_key=True)

class Orders(db.Model):
    __tableName__="Orders"
    oid=db.Column(db.Integer,primary_key=True)


with app.app_context():
    db.create_all()

@app.route("/")
def main():
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True)