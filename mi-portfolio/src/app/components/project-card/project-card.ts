import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-project-card',
  imports: [],
  standalone: true,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() techStack: string[] = [];
  @Input() link?: string;
  @Input() github?: string;

  getTechClass(tech: string): string {
    switch (tech.toLowerCase()) {
      case 'angular':
        return 'bg-red-200';
      case 'tailwindcss':
        return 'bg-teal-200';
      case 'laravel':
        return 'bg-pink-200';
      case 'php':
        return 'bg-blue-200';
      case 'typescript':
        return 'bg-blue-200';
      case 'javascript':
        return 'bg-yellow-200 text-black';
      case 'node':
        return 'bg-green-200';
      default:
        return 'bg-gray-200';
    }
  }
}
