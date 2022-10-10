import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Dev } from '../../../dev.model';

@Component({
  selector: 'app-dev-card-v1',
  templateUrl: './dev-card-v1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // defaut: ChangeDetectionStrategy.default
})
export class DevCardV1Component {
  @Input() public dev!: Dev;
}

/*
ChangeDetectionStrategy.default

- Avec cette stratégie, Angular n'aura aucune hypothèse sur la dépendance du composant et vérifiera chaque composant de l'arbre des composants de haut en bas
chaque fois qu'un événement déclenche la détection de changement sur les événements du navigateur, les timers, les XHR et les promesses.
- Ce type de comportement peut avoir un impact négatif sur les performances d'une grande application comportant de nombreux composants.
*/

/*
ChangeDetectionStrategy.OnPush

- Avec la stratégie OnPush, nous pouvons sauter les vérifications pour les composants qui utilisent la stratégie OnPush et tous ses composants enfants.
- Avec cette stratégie, Angular ne mettra à jour le composant que si une ou plusieurs de ces conditions se produisent :
  - La référence de l'entrée a changé
    -  @Input() : le détecteur de changement n'est déclenché que si les données transmises à @Input() ont une nouvelle référence.
  - Un événement provenant du composant ou de l'un de ses enfants.
    - chaque fois qu'un composant ou l'un de ses enfants déclenche un gestionnaire d'événements, la détection des changements sera déclenchée pour tous les composants de l'arbre des composants.
    - Sachez que les actions suivantes ne déclenchent pas la détection des changements avec la stratégie de détection des changements OnPush :
      - setTimeout
      - setInterval
      - Promesses
      - Toute souscription à un observable RxJS
  - Un pipe asynchrone lié au modèle émet une nouvelle valeur.
    - AsyncPipe intégré à Angular appelle en interne markForCheck à chaque fois qu'une nouvelle valeur est émise,
  - Déclenchement manuel de la détection de changement
    - detectChanges() on ChangeDetectorRef qui va lancer la détection des changements sur cette vue et ses enfants.
    - ApplicationRef.tick() qui déclenche la détection des changements pour tous les composants de l'arbre des composants (en gros, toute l'application).
    - markForCheck() on ChangeDetectorRef qui marque tous les ancêtres OnPush à vérifier une fois, soit au cours du cycle de détection actuel ou suivant.
      - Cette méthode ne déclenche pas directement le détecteur de changement.
*/
