# TP1 — Angular : Formulaires

## Exercice 1 — Template-Driven Forms

- Composant : `src/app/component/formulair/`
- Validation déclarée dans le template avec `ngModel`, `required`, `minlength`, `email` et `min="18"`.
- Messages d'erreur affichés sous chaque champ dès que celui-ci a été touché ou modifié et qu'il est invalide.
- Bouton « S'inscrire » désactivé tant que le formulaire est invalide.
- Récapitulatif affiché sous le formulaire après une soumission valide (et données envoyées dans la console).

## Exercice 2 — Reactive Forms

- Composant : `src/app/component/formulair-reactive/`
- Formulaire construit dans la classe avec `FormBuilder` et `Validators`.
- Mêmes champs et mêmes règles de validation que l'exercice 1.
- Messages d'erreur affichés uniquement lorsque le champ a été touché (`touched`) et qu'il est invalide.
- Bouton « S'inscrire » désactivé si le formulaire est invalide.
- Récapitulatif affiché après une soumission valide.

## Question de réflexion

**Template-Driven Forms** : le formulaire est décrit principalement dans le template HTML
(`ngModel`, directives de validation). Angular crée et gère le modèle du formulaire à partir
du template. Cette approche est simple, rapide à mettre en place et adaptée aux petits
formulaires ou aux prototypes.

**Reactive Forms** : le formulaire est défini dans la classe TypeScript avec `FormBuilder`,
`FormGroup` et `FormControl`. La validation y est explicite et le modèle est la source de
vérité. Cette approche est plus verbeuse, mais plus testable, plus typée, plus facile à
composer (formulaires imbriqués, tableaux dynamiques) et à faire évoluer.

**Préférence** : pour un formulaire simple (comme celui de ce TP), les Template-Driven Forms
suffisent. Pour un formulaire métier complexe, dynamique, fortement testé ou réutilisé dans
plusieurs vues, les Reactive Forms sont préférables.

## Lancement

L'interface est mise en page avec **Tailwind CSS** (classes utilitaires) et les
composants de formulaire viennent d'**Angular Material**.

```bash
npm start
```

- Exercice 1 : `http://localhost:4200/template-driven`
- Exercice 2 : `http://localhost:4200/reactive`
