# test-technique

Tout comme Wunderlist ou Google Tasks, les **listes de tâches** font partie du quotidien des professionnels de tous secteurs confondus.

L'application à développer se compose de deux principales sections :
- Page d'authentification
- Page principale

## Page d'authentification

C'est la page sur laquelle un utilisateur non connecté à l'application atterrit par défaut.

Il a la possibilité :
- soit de se connecter en utilisant un login/password;
- soit de créer un compte en remplissant un formulaire avec des informations basiques telles que nom, prénom, adresse email (et son champ de vérification), mot de passe (et son champ de vérification, etc).

## Page principale

Cette page regroupe 3 sous-catégories :
- *Left sidebar*
- *Main content*
- *Right sidebar*

### Left sidebar

Comme sur beaucoup d'applications, cette partie de la page est un bandeau vertical, rétractable, qui permet de réaliser plusieurs actions et de retrouver des informations importantes.

Dans notre cas, l'utilisateur doit pouvoir :
- Créer une nouvelle liste de tâches (en lui précisant un nom qui n'existe pas déjà);
- Retrouver toutes les listes de tâches qu'il aura créées;
- Sélectionner une liste de tâches;
- Supprimer une liste de tâches.

Si l'utilisateur supprime une liste de tâches, un modal apparaît, l'informant que toutes les tâches associées seront également supprimées, et lui demande de confirmer cette action ou d'annuler.

### Main content

C'est la section principale de l'application. Cette région se situe au centre de la page et permet d'afficher toutes les tâches d'une liste sélectionnée depuis la *left sidebar*.

L'utilisateur peut créer une tâche depuis cet écran en remplissant un certain nombre d'informations sur cette tâche :
- Description courte (obligatoire)
- Description longue (optionnelle)
- Date d'échéance (obligatoire)

Sur l'affichage principal, chaque tâche doit pouvoir être "flaguée" comme étant terminée. Elle se retrouve alors dans une section « Mes tâches terminées », masquée par défaut.
La section « Mes tâches terminées » doit pouvoir être ouverte et lister l’ensemble des tâches terminées.
Une tâche terminée doit pouvoir retourner dans la section des tâches à réaliser, dans le cas où l'utilisateur se serait trompé.

### Right sidebar

Cette section n'apparaît que lorsque l'utilisateur clique sur une tâche. Il s'agit donc de la vue détaillée de la tâche qui regroupe toutes les informations remplies lors de sa création, avec en plus :
- la date de création de la tâche
- un bouton permettant de supprimer la tâche.

Si l'utilisateur supprime une tâche, un modal lui demande de confirmer cette action. La tâche disparaît alors de la liste de tâches.

## Points d'attention

- L'utilisateur doit rester connecté tout au long de sa session;
- Les *left* et *right sidebar* doivent être rétractables/ouvrables;
- La *left sidebar* doit laisser apparaître les boutons/icônes permettant d'effectuer l'action de création d'une nouvelle liste de tâches et afficher une version minimale des liste de tâches (icônes,...);
- Si aucune liste de tâches n'est sélectionnée, la région *main content* doit avertir l'utilisateur que rien n'est affichable tant qu'une liste n'est pas sélectionnée;
- La *right sidebar* se rétracte automatiquement si on clique ailleurs que sur une tâche de la liste courante.

## Technologies à utiliser et consignes

La liste ci-dessous fait mention des technologies à utiliser.
L'utilisation de librairies et/ou technologies supplémentaires sont les bienvenues.

### Front
- Angular/React/Vue.js/... (Framework JS)
- Utilisation possible d’un framework CSS/JS/HTML tel que Material, Ant, Bootstrap, ...

### Back
- Node.js + Express/Hapi/NestJS et framework de ton choix
- Authentication et connexion via JWT
- BDD relationnelle (PostgreSQL, mySQL...) ou NoSQL (MongoDB, …)

### Hosting du projet
- Utilisation du repository Github
- Utilisation de commits réguliers, sur des branches spécifiques
- La version analysée sera du dernier commit disponible.

Envoyer un email à anis.sajed@saegus.com et eric.bauman@saegus.com si vous avez des questions sur le test.
