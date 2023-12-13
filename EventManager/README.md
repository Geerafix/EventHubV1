# EventManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



<!-- Funkcjonalności

Temat projektu: Organizacja eventu

Skład:
- Adam Grzeszczuk
- Mateusz Fiedosiuk
- Konrad Żukowski


Klasa Event
-nazwa: string
-rodzaj: string
-organizator: string
-miejsce: string
-max ilość osób: number
-data rozpoczęcia: date
-data zakończenia: date
-plan: Plan[]
-cena biletu: number

Klasa Plan
-nazwa: string
-godzina rozpoczęcia: date
-godzina zakończenia: date

Klasa EventAdmin extend Event
-lista uczestników: string[]
-haslo do zarządzania eventem: string

Klasa Formularz
-imie: string
-nazwisko: string
-e-mail: string
-nr telefonu: number
-PESEL: number


Ograniczenia:
Ilość obiektów Event: 100

nazwa.Event: <5, 30 znaków>
rodzaj.Event: <3, 20 znaków>; brak cyfr i spacji
organizator.Event: <3, 50> znaków
miejsce.Event: <=30 znaków; brak cyfr i spacji 
max ilość osób.Event: <= liczba trzycyfowa
data rozpoczecia.Event: format 'dd/mm/rrrr'; < data zakończenia.Plan; > SysDate()
data zakończenia.Event: format 'dd/mm/rrrr'; > data rozpoczęcia.Plan; > SysDate()
plan.Event: <1, 10 elementów tablicy>
cena biletu.Event: <= 3 znaki (liczba trzycyfowa)

nazwa.Plan: <5, 30 znaków>
godzina rozpoczęcia.Plan: format 'gg/mm'; < godzina zakończenia.Plan; > SysDate()
godzina zakończenia.Plan: format 'gg/mm'; > godzina rozpoczęcia.Plan; > SysDate()

lista uczestników.EventAdmin: <= liczba trzycyfowa elementów tablicy
haslo.EventAdmin: <8, 20 znaków>; min. jedna duża litera; min jeden znak specjalny

imie.Formularz: <3,20 znaków>; pierwsza litera duża; brak cyfr i spacji
nazwisko.Formularz: <3,30 znaków>; pierwsza litera duża; brak cyfr i spacji
e-mail.Formularz: format '[nazwa]@[nazwa serwera].[domena]'; brak spacji 
nr telefonu.Formularz: == 9 znaków 
PESEL.Formularz: == 11 znaków

 
Funkcjonalności:

Ogranizator:
-przeglądanie eventów
-dodaj nowy event(przycisk nowy event) przekazanie danych do formularza
-nanoszenie zmian w wydarzeniu(modyfkiacja/usuwanie)
-przypominenie o nadchodzących eventach(sprawdzanie daty)
-sprawdzenie listy uczestników

Uczestnik:
-przeglądanie eventów
-przypominenie o nadchodzących eventach(sprawdzanie daty)
-wzięcie udziału(przycisk i przekierowanie do formularza) przekazanie danych do formularza i kupienie biletu -->


<!-- 
Wymagania:
* - klasa TypeScript (czy zdefiniowano i zastosowano klasę do organizacji danych, czy pola w klasie są prywatne ) - 1pkt 

* - typy TypeScript (czy każda zmienna ma przyporządkowany typ) - 1pkt

* - zaawansowane elementy TypeScript (jeden z wymienionych): - 2pkt
  
  - klasy pochodne TypeScript (czy wykorzystano również klasy pochodne) ,
  
  - getter+setter (czy wykorzystano i  czy właściwie zostały dobrane)
    +parametry opcjonalne metod (czy są i czy właściwie dobrane)
    +modyfikatory dostępu w konstruktorze.

* - wykorzystanie formularzy, min. 5 elementów (czy właściwie wybrano dane do wprowadzania i dobrano rodzaj elementu formularza, czy nie ma        dwustronnego wiązania danych w szablonie - 1pkt

* - walidacja danych wprowadzanych przez użytkownika ( w każdym przypadku wprowadzania danych, czy odpowiednio dobrano walidatory) - 2pkt,

- dwukierunkowa komunikacja pomiędzy komponentami (czy jest w każdym spodziewanym przypadku) - 2pkt,

- modyfikacja danych odbywa się tylko w jednym komponencie - 1pkt

- operacje modyfikacji danych za pomocą 4 rodzajów żądań http - 1pkt

- dane pochodzące z jednej klasy usługi - 1pkt

- dodatkowy serwis (a)synchroniczny - 1pkt

* - własna dyrektywa - 1pkt

* - wykorzystanie dowolnego filtru standardowego w szablonie  - 1pkt

* - implementacja własnego filtru - 2pkt

* - routing (ścieżki 'routes', w tym jedna z parametrem, operacje na obiekcie ActivateRoute i Route) - 1pkt 
-->
