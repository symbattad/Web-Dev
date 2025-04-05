import json
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy

class CompanyListView(View):
    def get(self, request):
        companies = Company.objects.all().values()
        return JsonResponse({'companies': list(companies)})

    def post(self, request):
        try:
            data = json.loads(request.body)  
            company = Company.objects.create(
                name=data['name'],
                description=data.get('description', ''),
                city=data['city'],
                address=data['address']
            )
            return JsonResponse({
                'id': company.id,
                'name': company.name,
                'description': company.description,
                'city': company.city,
                'address': company.address
            }, status=201)  
        except (KeyError, json.JSONDecodeError):
            return JsonResponse({'error': 'Invalid data'}, status=400)

class CompanyDetailView(View):
    def get(self, request, id):
        company = get_object_or_404(Company, id=id)
        return JsonResponse({'company': {
            'name': company.name,
            'description': company.description,
            'city': company.city,
            'address': company.address
        }})

class VacancyListView(View):
    def get(self, request):
        vacancies = Vacancy.objects.all().values()
        return JsonResponse({'vacancies': list(vacancies)})
    def post(self, request):
        try:
            data = json.loads(request.body)  
            company = Company.objects.get(id=data['company_id'])   
            vacancy = Vacancy.objects.create(
                name=data['name'],
                description=data.get('description', ''),
                salary=data['salary'],
                company=company
            )
            return JsonResponse({
                'id': vacancy.id,
                'name': vacancy.name,
                'description': vacancy.description,
                'salary': vacancy.salary,
                'company': vacancy.company.id
            }, status=201)  
        except (KeyError, json.JSONDecodeError):
            return JsonResponse({'error': 'Invalid data'}, status=400)

class VacancyDetailView(View):
    def get(self, request, id):
        vacancy = get_object_or_404(Vacancy, id=id)
        return JsonResponse({'vacancy': {
            'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary,
            'company': vacancy.company.name
        }})

class VacanciesByCompanyView(View):
    def get(self, request, id):
        company = get_object_or_404(Company, id=id)
        vacancies = Vacancy.objects.filter(company=company).values()
        return JsonResponse({'vacancies': list(vacancies)})

class TopTenVacanciesView(View):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:5].values()
        return JsonResponse({'top_10_vacancies': list(vacancies)})
