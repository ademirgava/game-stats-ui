import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-lazy-content",
  imports: [CommonModule],
  templateUrl: "./lazy-content.component.html",
  styleUrl: "./lazy-content.component.css",
})
export class LazyContentComponent {
  advancedComponent: any;

  async loadAdvancedFetures() {
    try {
      const module = await import(
        "../advanced-fetures/advanced-fetures.component"
      );
      this.advancedComponent = module.AdvancedFeturesComponent;
    } catch (error) {
      console.error("Failed to load component: " + error);
    }
  }
}
