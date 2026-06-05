from django.shortcuts import render, redirect
from .models import Student

# Create your views here.
def home(request):
    return render(request, 'library/home.html')

def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        rollno = request.POST.get("rollno")
        

        if not email.endswith("@thapar.edu"):
            return render(request, "library/login.html", {
                "error": "Please enter a valid Thapar email ID."
            })

        if not (rollno.isdigit() and len(rollno) == 10):
            return render(request, "library/login.html", {
                "error": "Roll number must contain exactly 10 digits."
            })

        

        try:
            student = Student.objects.get(
                email=email,
                roll_no=rollno
            )

            request.session['student_name'] = student.name
            request.session['student_email'] = student.email

            return redirect('index')
        
        except Student.DoesNotExist:
         return render(request, 'library/login.html', {
                'error': 'Invalid Email or Roll Number'
            })

    return render(request, 'library/login.html')

def index_view(request):

    name = request.session.get('student_name')

    return render(request, 'library/index.html', {
        "name": request.session.get("student_name")
    })

def book_seat(request):
    return render(request, 'library/seat.html', {
        "seats0": range(1, 185),
        "seats1": range(1, 87),
        "seats2": range(1, 61),
        "seats3": range(1, 55),
        "seats4": range(1, 67)
    })

def notification(request):
    return render(request, 'library/notification.html')

def break_status(request):
    return render(request, "library/break.html")

def checkin(request):
    return render(request, "library/checkin.html")