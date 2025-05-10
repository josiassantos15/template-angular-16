import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private readonly apiUrl = 'https://api.example.com/templates';
  private readonly templateList: string[] = [];
}