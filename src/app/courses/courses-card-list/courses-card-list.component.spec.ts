import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {COURSES} from '../../../../server/db-data';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {sortCoursesBySeqNo} from '../home/sort-course-by-seq';
import {setupCourses} from '../common/setup-test-data';


describe('CoursesCardListComponent', () => {

  let courseCardListComponent: CoursesCardListComponent;
  // Test utility type
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoursesCardListComponent);
        courseCardListComponent = fixture.componentInstance;
        debugElement = fixture.debugElement;
      });


  }));


  it("should create the component", () => {

    expect(courseCardListComponent).toBeTruthy();

  });


  it("should display the course list", () => {

    courseCardListComponent.courses = setupCourses();
    fixture.detectChanges();

    const cards = debugElement.queryAll(By.css('.course-card'));

    expect(cards).withContext('Could not find cards').toBeTruthy();
    expect(cards.length).withContext('Unexpected number of courses').toBe(12);

  });


  it("should display the first course", () => {

    courseCardListComponent.courses = setupCourses();
    fixture.detectChanges();

    const course = courseCardListComponent.courses[0];

    const card = debugElement.query(By.css('.course-card:first-child')), title = card.query(By.css('mat-card-title')), image = card.query(By.css('img'));

    expect(card).withContext('Could not find card').toBeTruthy();
    expect(title.nativeElement.textContent).toBe(course.titles.description);
    expect(image.nativeElement.src).toBe(course.iconUrl);

  });


});


