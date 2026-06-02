from django.db import models

class Student(models.Model):
    name = models.CharField(max_length = 100)
    email = models.EmailField(unique=True)
    roll_no = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name