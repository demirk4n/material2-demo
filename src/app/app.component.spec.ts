import { } from 'jasmine';
import 'hammerjs';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


describe('AppComponent (template)', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent], // declare the test component
      imports: [MaterialModule, FormsModule]
    }).compileComponents();
  }));
  // 2nd beforeEach synchronous
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('md-toolbar.title'));
    el = de.nativeElement;
  });
  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <md-toolbar> material component', () => {
    fixture.detectChanges();
    const md_toolbar = de.nativeElement;
    expect(md_toolbar.innerText).toMatch('Angular Material Demo Application',
      '<md-toolbar> should say "Angular Material Demo Application"');
  });
});
