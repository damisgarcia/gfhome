'use strict';

/**
 * @ngdoc function
 * @name landscapeTemplateApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the landscapeTemplateApp
 */
angular.module('girafalesHomeApp')
  .controller('HomeCtrl', function ($timeout) {
    var self = this

    self.carouselInterval = false
    self.noWrapSlides = true

    self.slides = {
      students: { active: true },
      teachers: { active: false }
    }

    self.toStudents = function(e){
      e.preventDefault()
      $timeout(function(){
        self.slides.students.active = true
        self.slides.teachers.active = false
      },100)
    }

    self.toTeachers = function(e){
      e.preventDefault()
      $timeout(function(){
        self.slides.students.active = false
        self.slides.teachers.active = true
      },100)
    }

    // Professors profiles
    self.profiles = [
      {
        title:"Thiago Pacífico",
        content:"Matemática Básica, Raciocínio Lógico",
        picture:"img/profiles/01.png"
      },
      {
        title:"Giovannna Carranza",
        content:"Administração Geral, Administração Pública",
        picture:"img/profiles/02.jpg"
      },
      {
        title:"Lidiane Coutinho",
        content:"Direito Administrativo",
        picture:"img/profiles/03.png"
      },
      {
        title:"Carol Fernandes",
        content:"Direito Penal, Direito Administrativo",
        picture:"img/profiles/04.jpg"
      },
      {
        title:"Malu Aragão",
        content:"Direito Constitucional",
        picture:"img/profiles/05.jpg"
      },
      {
        title:"Não Definido",
        content:"Direito Constitucional",
        picture:"img/profiles/06.jpg"
      }
    ]

    // Forms

    self.patterns = {
      personName: { regex: /^[a-zA-Z\s]*$/, message: "Apenas letras de A-Z são permitídas" }
    }

    self.signup_students = { name:null, email:null }
    self.signup_teachers = { name:null, email:null }

    self.submit_signup_students = function(form){
      console.log(form.name)
      if(form.$valid){
        var params = ["name="+self.signup_students.name, "email="+self.signup_students.email]
        window.location.href = "https://staging.girafales.com/student/new?" + params.join("&")
      }
    }

    self.submit_signup_teachers = function(form){
      if(form.$valid){
        var params = ["name="+self.signup_teachers.name, "email="+self.signup_teachers.email]
        window.location.href = "https://staging.girafales.com/professor/new?" + params.join("&")
      }
    }
  });
