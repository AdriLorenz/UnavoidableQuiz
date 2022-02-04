import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './components/question/question.component';
import { QuestionService } from './services/question.service';
import { UserComponent } from './components/user/user.component';
import { TopicComponent } from './components/topic/topic.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { CreateQuestionComponent } from './components/question/create-question/create-question.component';
import { CreateTopicComponent } from './components/topic/create-topic/create-topic.component';
import { EditTopicComponent } from './components/topic/edit-topic/edit-topic.component';
import { EditQuestionComponent } from './components/question/edit-question/edit-question.component';
import { DetailQuestionComponent } from './components/question/detail-question/detail-question.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { SingleQuestionComponent } from './components/question/single-question/single-question.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeComponent } from './components/theme/theme.component';
import { EditThemeComponent } from './components/theme/edit-theme/edit-theme.component';
import { AddThemeComponent } from './components/theme/add-theme/add-theme.component';
import { SingleThemeComponent } from './components/theme/single-theme/single-theme.component';
import { SingleTopicComponent } from './components/topic/single-topic/single-topic.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    UserComponent,
    TopicComponent,
    LoginComponent,
    RegisterComponent,
    CreateQuestionComponent,
    CreateTopicComponent,
    EditTopicComponent,
    EditQuestionComponent,
    DetailQuestionComponent,
    EditUserComponent,
    DetailUserComponent,
    SingleQuestionComponent,
    ThemeComponent,
    EditThemeComponent,
    AddThemeComponent,
    SingleThemeComponent,
    SingleTopicComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [QuestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
