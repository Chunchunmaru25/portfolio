```tsx
export interface AuthLoginProps {
    modal?: boolean;
    className?: string;
    trigger?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
```

# AuthLogin Usage

## 1. Plain Inline Page (No Props)

Render the full-page login layout.

```tsx
<AuthLogin />
```

- No props required.
- Ignores `modal`, `children`, and `open`.
- Renders the default full-page dark layout.

---

## 2. Inline with Custom Card Styling

Customize the login card width or spacing.

```tsx
<AuthLogin className="max-w-[480px]" />
```

- `className` is appended to the card container.
- Useful for overriding width or spacing without modifying the component.

Example:

```tsx
<div className={`relative w-full max-w-[400px] ${className}`}>
```

---

## 3. Uncontrolled Modal

The component manages its own open/close state.

```tsx
<AuthLogin modal>
  <button className="rounded-md bg-[#5B8DEF] px-4 py-2 text-sm text-white">
    Log in
  </button>
</AuthLogin>
```

- `children` acts as the trigger.
- Since `open` and `onOpenChange` are omitted, the component uses its internal state.

---

## 4. Uncontrolled Modal with a Link Trigger

Any single React element can be used as the trigger.

```tsx
<AuthLogin modal className="max-w-sm">
  <a href="#" className="text-xs text-[#5B8DEF] underline">
    Sign in to continue
  </a>
</AuthLogin>
```

- The child element is cloned internally with an injected `onClick` handler.

---

## 5. Fully Controlled Modal (No Trigger)

Open the modal programmatically.

```tsx
const [open, setOpen] = useState(false);

// Example: Axios/fetch interceptor catches a 401
onUnauthorized(() => setOpen(true));

<AuthLogin
  modal
  open={open}
  onOpenChange={setOpen}
/>
```

- No trigger (`children`) is required.
- Visibility is completely controlled by the parent component.

---

## 6. Controlled Modal with a Trigger

Supports both manual and programmatic opening.

```tsx
const [open, setOpen] = useState(false);

<AuthLogin
  modal
  open={open}
  onOpenChange={setOpen}
>
  <button>Log in</button>
</AuthLogin>

// Anywhere else in your app
setOpen(true); // e.g. session expired
```

- Clicking the button opens the modal.
- Calling `setOpen(true)` anywhere else also opens it.

---

## 7. Controlled Modal Synced with URL Query Parameters

Useful for shareable login links such as `/?login=1`.

```tsx
const [params, setParams] = useSearchParams();

const open = params.get("login") === "1";

<AuthLogin
  modal
  open={open}
  onOpenChange={(next) =>
    setParams(next ? { login: "1" } : {}, { replace: true })
  }
>
  <button>Log in</button>
</AuthLogin>
```

- Opening the modal updates the URL.
- Closing it removes the query parameter.
- Allows deep-linking directly to the login modal.