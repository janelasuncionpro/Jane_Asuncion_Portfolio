import { Component, AfterViewInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
@Component({selector: 'app-root', standalone: true, templateUrl: './app.html'})
class PortfolioComponent implements AfterViewInit, OnDestroy {
 private cdr = inject(ChangeDetectorRef);
 darkTheme = false;
 techGroups = [
 {name: 'Backend & data', items: [
 {name:'C#',icon:'csharp',level:'Core experience',description:'Developing enterprise applications, backend services, validations, and treasury workflows.'},
 {name:'.NET',icon:'dotnet',level:'Core experience',description:'Building applications with .NET, .NET Core, ASP.NET Core, MVC, REST APIs, and Entity Framework Core.'},
 {name:'SQL Server',icon:'sqlserver',level:'Core experience',description:'Working with queries, joins, indexes, stored procedures, pagination, and database performance.'}]},
 {name:'Frontend',items:[
 {name:'Blazor',icon:'blazor',level:'Hands-on experience',description:'Developing treasury UI features, configurable dashboards, validation, and data-driven components.'},
 {name:'Angular',icon:'angular',level:'Hands-on experience',description:'Building component-based user interfaces. This portfolio also uses Angular.'},
 {name:'TypeScript',icon:'typescript',level:'Frontend development',description:'Supporting typed, maintainable frontend components and application interactions.'},
 {name:'JavaScript',icon:'javascript',level:'Frontend development',description:'Adding browser interactions and connecting frontend behavior with application services.'},
 {name:'React',icon:'react',level:'Familiarity · building proficiency',description:'Familiar with components, state management, and API integration concepts; continuing to build practical proficiency.'}]},
 {name:'Cloud & collaboration',items:[
 {name:'Azure',icon:'azure',level:'Team-based experience',description:'Participating in Azure DevOps delivery workflows alongside DevOps teams, who handled service and deployment configuration.'},
 {name:'Git',icon:'git',level:'Hands-on experience',description:'Working with feature branches, peer reviews, and collaborative releases.'}]}
 ];
 selectedTech = this.techGroups[0].items[0];
 menuOpen = false;
 filter = 'all';
 filterAnimating = false;
 activeSection = '';
 private observer?: IntersectionObserver;
 private timer?: ReturnType<typeof setTimeout>;
 private categories = ['fullstack quality', 'fullstack data', 'fullstack quality'];
 get visibleCount() { return this.categories.filter(value => this.matches(value)).length; }
 matches(categories: string) { return this.filter === 'all' || categories.split(' ').includes(this.filter); }
 selectFilter(value: string) { this.filter = value; this.filterAnimating = true; clearTimeout(this.timer); this.timer = setTimeout(() => { this.filterAnimating = false; this.cdr.markForCheck(); }, 350); }
 onDetailToggle(event: Event) { const details = event.target as HTMLDetailsElement; details.querySelector('summary')?.setAttribute('aria-expanded', String(details.open)); }
 navigateTo(event: MouseEvent, sectionId: string) {
   if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
   const section = document.getElementById(sectionId);
   if (!section) return;
   event.preventDefault();
   this.menuOpen = false;
   this.cdr.detectChanges();
   requestAnimationFrame(() => {
     section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
     history.replaceState(null, '', '#' + sectionId);
   });
 }
 ngAfterViewInit() {
   if (!('IntersectionObserver' in window)) return;
   this.observer = new IntersectionObserver(entries => { for (const entry of entries) { if(entry.isIntersecting) { entry.target.classList.add('reveal'); if(entry.target.id) this.activeSection = entry.target.id; this.cdr.markForCheck(); } } }, {rootMargin: '0px 0px -15% 0px', threshold: .1});
   document.querySelectorAll('main > section').forEach(section => this.observer?.observe(section));
 }
 ngOnDestroy() { this.observer?.disconnect(); clearTimeout(this.timer); }
}
bootstrapApplication(PortfolioComponent).catch(error => console.error(error));
