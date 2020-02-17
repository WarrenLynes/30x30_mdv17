import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import AuthGuard from './auth.guard';
import { LoginComponent, NotFoundComponent } from '@mdv17/ui';

@NgModule({
  imports: [
   RouterModule.forRoot([
     { path: '', canActivate: [AuthGuard], component: TasksComponent },
     { path: 'login', component: LoginComponent },
     { path: '404', component: NotFoundComponent },
     { path: '**', redirectTo: '404' }
   ],{ initialNavigation: 'enabled' })
  ],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
