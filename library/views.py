from django.shortcuts import render, redirect

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

        return redirect('index')
    return render(request, 'library/login.html')

def index_view(request):
    return render(request, 'library/index.html')