from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'library/home.html')

def login_view(request):
    return render(request, 'library/login.html')

def index_view(request):
    return render(request, 'library/index.html')