import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RodapeComponent } from './components/rodape/rodape.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent
    },

    {
        path: "login",
        component: LoginComponent
    }
];
