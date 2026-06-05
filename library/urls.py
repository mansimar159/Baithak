from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('index/', views.index_view, name='index'),
    path('book_seat/', views.book_seat, name='seat'),
    path('notification/', views.notification, name='notification'),
    path("break/", views.break_status, name="break"),
    path("checkin/", views.checkin, name="checkin"),
    
]