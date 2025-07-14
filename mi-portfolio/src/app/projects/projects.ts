import { Component } from '@angular/core';
import { ProjectCard } from '../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ ProjectCard],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'Diarios Nómadas',
      description: 'Aplicación web construida con Laravel que resuelve el problema de tener los recuerdos de viaje fragmentados. En lugar de tener fotos en una carpeta, notas en el móvil y posts en redes sociales, esta plataforma unifica todo en un solo lugar. Permite a los viajeros crear diarios detallados, visualizar sus rutas en un mapa interactivo y conectar con una comunidad de amigos para compartir e inspirarse mutuamente.',
      imageUrl: 'images/proyecto-diarios-nomadas.png',
      techStack: ['php', 'Laravel', 'tailwindcss', 'JavaScript', 'Desplegada'],
      link: 'https://diario-nomada-limpio-main-sxtzrj.laravel.cloud/login',
      github: 'https://github.com/MercheME/diario-nomada-limpio'
    },
    {
      title: 'Space X',
      description: 'Aplicación que consume la REST API de SpaceX y presenta los datos mediante una interfaz limpia y responsiva. Implementa consumo asincrónico con HTTPClient, manejo de estados de carga, y paginación de resultados. Ideal como ejemplo de integración con APIs externas y visualización dinámica de datos.',
      imageUrl: 'images/Api-spacex.png',
      techStack: ['Angular', 'Typescript', 'Desplegada'],
      link: 'https://golden-horse-f3c59a.netlify.app/spaceX/launches',
      github:'https://github.com/MercheME/angular-spacex'
    },
    {
      title: 'Fitoterapia APP',
      description: 'Aplicación web para compartir recetas naturales, hierbas medicinales y remedios caseros. Consume una API creada por mí en Node. ',
      imageUrl: 'images/remedios-naturales.png',
      techStack: ['Angular', 'Typescript', 'Angular Material', 'Node'],
      github:'https://github.com/MercheME/fitoterapiaAppAngular'
    },
  ];
}
