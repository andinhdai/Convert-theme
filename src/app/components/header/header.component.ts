import { Component, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  isDropdownOpen = false;
  isCurrentDropdownOpen = false;
  isFilterDropdownOpen = false;
  selectedLanguage = 'Tiếng Việt';
  selectedCurrency = 'USD - Đô la Mỹ';
  selectedCategory = 'All Categories';
  categories = ['All Categories', 'Tùy chọn 1', 'Tùy chọn 2'];


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.isCurrentDropdownOpen = false; // Đóng dropdown khác nếu mở
    }
  }

  toggleCurrentDropdown() {
    this.isCurrentDropdownOpen = !this.isCurrentDropdownOpen;
    if (this.isCurrentDropdownOpen) {
      this.isDropdownOpen = false; // Đóng dropdown khác nếu mở
    }
  }

  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
    if (this.isFilterDropdownOpen) {
      this.isDropdownOpen = false; // Đóng dropdown khác nếu mở
    }
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.isDropdownOpen = false; // Đóng dropdown sau khi chọn
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.isCurrentDropdownOpen = false; // Đóng dropdown sau khi chọn
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.isFilterDropdownOpen = false; // Đóng dropdown sau khi chọn
  }

  @ViewChild('addMenu') addMenu!: ElementRef;
  @ViewChild('searchInMenu') searchInMenu!: ElementRef;
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  
  isMenuOpen = false;
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    this.renderer.listen(this.toggleButton.nativeElement, 'click', () => {
      this.toggleMenu();
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.renderer.removeClass(this.addMenu.nativeElement, 'hidden');
      this.renderer.addClass(this.addMenu.nativeElement, 'flex');
      this.renderer.addClass(this.addMenu.nativeElement, 'flex-col');
      this.renderer.removeClass(this.searchInMenu.nativeElement, 'hidden');
      this.renderer.addClass(this.searchInMenu.nativeElement, 'flex');
      this.renderer.addClass(this.addMenu.nativeElement, 'add-menu-show');
      
    } else {
      this.resetMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.resetMenu(); // Đặt lại trạng thái của menu khi thay đổi kích thước màn hình
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (
      !this.addMenu.nativeElement.contains(target) && 
      !this.toggleButton.nativeElement.contains(target)
    ) {
      this.resetMenu(); // Đóng menu khi click ra ngoài
    }
      if (!target.closest('.dropdown-container') && !target.closest('.toggle-dropdown-button')) {
        this.isDropdownOpen = false;
        this.isCurrentDropdownOpen = false;
        this.isFilterDropdownOpen = false;
      }
  }
  resetMenu() {
    this.isMenuOpen = false;
    this.renderer.addClass(this.addMenu.nativeElement, 'hidden');
    this.renderer.removeClass(this.addMenu.nativeElement, 'flex');
    this.renderer.removeClass(this.addMenu.nativeElement, 'flex-col');
    this.renderer.addClass(this.searchInMenu.nativeElement, 'hidden');
      this.renderer.removeClass(this.searchInMenu.nativeElement, 'flex');
    // Đặt lại các lớp CSS mới
    this.renderer.removeClass(this.addMenu.nativeElement, 'add-menu-show');
    
  }
}
