import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { log } from 'console';
import { LoginComponent } from './pages/login/login.component';
import { DefaultLoginLayoutComponent } from './components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "cadastro",
        component: CadastroComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
];
