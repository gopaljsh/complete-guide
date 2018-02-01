import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.show') isShow = false;
    constructor(private elm: ElementRef, private renderer: Renderer2){}

    @HostListener('click') toggleOpen(){
        this.isShow = !this.isShow;

        if(this.isShow) {
            this.renderer.addClass(this.elm.nativeElement.children[1], 'show');
        } else {
            this.renderer.removeClass(this.elm.nativeElement.children[1], 'show');
        }
    } 
}