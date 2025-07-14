import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre-mi', component: About },
  { path: 'proyectos', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'contacto', component: Contact },
];
