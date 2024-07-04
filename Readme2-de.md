# React Router - 2

Im nächsten Schritt machen wir folgendes:

- Richte eine `404` Seite ein, die angezeigt wird, wenn jemand auf eine URL navigiert, die es nicht gibt.
- Unterschied zwischen `<Link>` und `<NavLink>`
- Verwende den `useNavigate` Hook, um programmatisch auf eine andere Seite zu navigieren.
- Erstelle eine Login-Seite und ein Anmeldeformular, um die Nutzung des `useNavigate` Hooks zu demonstrieren.

## Schritte

### 404 Seite

1. Erstelle eine neue Seite namens `NotFoundPage.jsx` im `pages` Ordner.
2. Füge eine einfache Nachricht hinzu, die angezeigt wird, wenn jemand auf eine URL navigiert, die es nicht gibt.
3. Importiere `NotFoundPage` in die `App.jsx` Datei und richte eine Route dafür ein.
4. Stelle sicher, dass der Pfad für `NotFoundPage` auf `*` gesetzt ist, damit er zu jeder URL passt, die es nicht gibt.
5. Teste die `NotFoundPage`, indem du zu einer URL navigierst, die es nicht gibt.

### `<Link>` vs `<NavLink>`

- Das `<Link>` Element wird verwendet, um auf eine andere Seite in der Anwendung zu navigieren.
- Das `<NavLink>` Element wird verwendet, um auf eine andere Seite in der Anwendung zu navigieren und außerdem eine Klasse auf den Link anzuwenden, wenn er aktiv ist.
- Wir werden daher unsere `NavigationComponent.jsx` Datei aktualisieren, um das `<NavLink>` Element anstelle des `<Link>` Elements zu verwenden.

### Login Seite

9. Erstelle eine neue Seite namens `LoginPage.jsx` im `pages` Ordner.
10. Füge ein einfaches Anmeldeformular mit folgenden Feldern hinzu:
    - Benutzername
    - Passwort
    - Absenden Button
11. Mach die Eingabefelder zu kontrollierten Komponenten, indem du Zustände für die Felder `userName` und `password` einrichtest.
12. Wir simulieren das Einloggen mit einem fiktiven Benutzer aus einer Datenbank, indem:

- Ein `fakeUser` Zustandsobjekt mit einem `userName` und `password` Feld erstellt wird.

```javascript
const [fakeUser, setFakeUser] = useState({
  userName: "john doe",
  password: "r3@ct",
  success: null,
});
```

- Eine Bedingung in der `onSubmit` Funktion erstellt wird, die überprüft, ob `userName` und `password` dem `fakeUser` Zustandsobjekt entsprechen.
  - Wenn sie übereinstimmen, navigieren wir mit dem `useNavigate` Hook zur `Home` Seite.

```javascript
const navigate = useNavigate();
const onSubmit = (e) => {
  e.preventDefault();
  if (userName === fakeUser.userName && password === fakeUser.password) {
    navigate("/home");
  } else {
    setFakeUser({ ...fakeUser, success: false });
  }
};
```

- Wenn sie nicht übereinstimmen, wird eine Fehlermeldung angezeigt.

```jsx
{
  fakeUser.success === false && (
    <p className="text-red-500">Invalid username or password</p>
  );
}
```
