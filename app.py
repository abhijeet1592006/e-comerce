from flask import Flask,redirect,render_template,session,request

from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)

app.secret_key="hello"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"

db=SQLAlchemy(app)

class Customer_data(db.Model):
    __tablename__="customer_data"
    uid=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(25),nullable=False)
    password=db.Column(db.String(25),nullable=False)
    orders=db.Column(db.String(50),nullable=True)
    phone_no=db.Column(db.Integer,nullable=True)
    address=db.Column(db.String(100),nullable=False)

class Product(db.Model):
    __tablename__="product"
    
    pid=db.Column(db.Integer,primary_key=True)
    pname=db.Column(db.String(25),nullable=False)
    prating=db.Column(db.String(25),nullable=True)


class Orders(db.Model):
    __tablename__="orders"
    oid=db.Column(db.Integer,primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.pid'))
    user_id = db.Column(db.Integer, db.ForeignKey('customer_data.uid'))

    user_name=db.Column(db.String(25),nullable=False)
    user_address=db.Column(db.String(100),nullable=False)
    user_phone_no=db.Column(db.Integer,nullable=True)


with app.app_context():
    db.create_all()

@app.route("/")
def main():
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True)