import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TabInterface } from '@app/@layout/vertical/header/tabs/tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  tabs: TabInterface[] = [];
  selectedIndex = -1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCurrentRoute();
    this.urlChange();
  }

  getCurrentRoute() {
    const currentRoute = this.activatedRoute.snapshot.firstChild;
    let tab = {
      path: this.router.url,
      title: 'Untitled',
    };
    if (currentRoute.firstChild.children.length > 0) {
      this.activatedRoute.queryParams.subscribe(params => {
        if(params.user){
          const user = JSON.parse(params.user);
          tab = {
            path: this.router.url,
            title:  `${user.firstName} ${user.lastName}`,
          };

        }else{
          tab = {
            path: this.router.url,
            title: currentRoute.firstChild.children[0].data.title,
          };
        }

      });
    } else {
      if (currentRoute.firstChild.data) {
        tab = {
          path: this.router.url,
          title: currentRoute.firstChild.data.title,
        };
      }
    }
    this.tabs.push(tab);
    this.selectedIndex = 0;
  }

  closeTab(tab: TabInterface): void {
    const closedTabIndex = this.tabs.indexOf(tab);
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    if (closedTabIndex === this.selectedIndex) {
      if (closedTabIndex < this.tabs.length - 1) {
        this.navigateToTab(this.tabs[closedTabIndex - 1]);
      }
      if (closedTabIndex >= this.tabs.length - 1 && this.tabs.length > 0) {
        this.navigateToTab(this.tabs[closedTabIndex + 1]);
      }
    }
  }

  navigateToTab(tab: TabInterface) {
    this.router.navigateByUrl(tab.path).then((e) => {
      if (e) {
        this.selectedIndex = this.tabs.indexOf(tab);
      }
    });
  }

  urlChange() {
    let tab = {
      path: this.router.url,
      title: 'Untitled',
    };

    this.router.events.subscribe((event: Event) => {



      if (event instanceof NavigationEnd) {
        if (event.url !== '/mhira/not-found' && event.url !== '/') {
          const pathFound = this.tabs.some((tab) => tab.path === event.url.slice(1));
          if (!pathFound) {
            const currentChild = this.activatedRoute.snapshot.firstChild;
            if (currentChild.firstChild.children.length > 0) {
              this.activatedRoute.queryParams.subscribe(params => {
                if(params.user){
                  const user = JSON.parse(params.user);
                  tab = {
                    path: this.router.url,
                    title:  `${user.firstName} ${user.lastName}`,
                  };

                }else{
                  tab = {
                    path: this.router.url,
                    title: currentChild.firstChild.children[0].data.title,
                  };
                }

              });

            } else {
              if (currentChild.firstChild.data) {

                tab = {
                  path: this.router.url,
                  title: currentChild.firstChild.data.title,
                };
              }

            }



            const isInArray =
              this.tabs.find((_tab) => {
                return _tab.path === this.router.url;
              }) !== undefined;

            if (!isInArray) {
              console.log(tab)
              this.tabs.push(tab);
            }
            this.tabs.filter((_tab) => {
              if (_tab.path === this.router.url) {
                this.selectedIndex = this.tabs.indexOf(_tab);
                return;
              }
            });
          } else {
            const tab = this.tabs.filter((_tab) => {
              return _tab.path === this.router.url;
            })[0];
            this.selectedIndex = this.tabs.indexOf(tab);
            this.navigateToTab(tab);
          }
        }
      }
    });
  }
}
