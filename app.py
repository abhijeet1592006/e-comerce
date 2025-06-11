from flask import Flask,redirect,render_template,session,request

from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)