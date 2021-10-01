describe('appComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;
  const authServiceSpy = jasmine.createSpyObj('authService', {
    logout: ()=> {}  
  });
  
   const bnIdleServiceSpy = jasmine.createSpyObj('bndlService', {
    bnIdle : ()=>of({})  
  });
  


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponent ],
      providers: [
        { provide: authService, useValue: authServiceSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  }));

  it('should call logout service ', function () {
    const service = TestBed.get(authService); // get your service
    // spyOn(service, 'logout').and.callThrough(); // create spy
	fixure.detectChanges();
    expect(service.logout).toHaveBeenCalledWith();
  });
});
