from django.db import models
from django.db.models.deletion import CASCADE

class User(models.Model):
    emai=models.CharField(max_length=100)
    name=models.CharField(max_length=30)
    Firstname=models.CharField(max_length=30)
    Lastname=models.CharField(max_length=30)
    DateBirth=models.DateField('DateBirth')
    

class Card(models.Model):
    CardNumber=models.CharField(max_length=19)
    Secret=models.CharField(max_length=3)
    Expiredate=models.CharField(max_length=3)
    id_user_Card_FKey=models.ForeignKey('User',on_delete=CASCADE)
    

class Address(models.Model):
    Region=models.CharField(max_length=100)
    State=models.CharField(max_length=100)
    Street=models.CharField(max_length=100)
    id_user_Address_FKey=models.ForeignKey('User')
    
class ClientOrder(models.Model):
    id_product_ClientOrder_FR=models.ForeignKey('ProductList')
    id_user_ClientOrder_FKey=models.ForeignKey('User')
    m_count=models.PositiveIntegerField('m_count')

class ProductList(models.Model):
    ProductName=models.CharField(max_length=100)
    ProductDate1=models.DateField('ProductDate1')
    ProductDate2=models.DateField('ProductDate2')
    Manufactured=models.TextField('Manufactured')
    LastEditDate=models.DateField('LastEditDate')
    id_category_ProductList_FKey=models.ForeignKey('Category')
    Quantity=models.PositiveIntegerField('Quantity')
    Cost=models.DecimalField('Cost')

class Category(models.Model):
    name=models.CharField(max_length=100)
    id_Restaurant_Category_FKey=models.ForeignKey('Restaurant')

class Restaurant(models.Model):
    RestaurantName=models.CharField(max_length=100)
    TimeStart=models.TimeField()
    TimeEnd=models.TimeField()