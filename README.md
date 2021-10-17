# CSP Angular

This application is a demonstration prototype just to show how to write a Content Security Policy.

# For local environement

Write your CSP in ``src/environments/environment.ts`` and run ``npm start``.

Customize your CSP to resolve all errors, without using ``script-src: unsafe-eval``.

# For production environement

Write your CSP in ``src/environments/environment.prod.ts`` and run ``npm run build``.

Then, run ``npm run serve`` to expose the application. Adjust your CSP to resolve all errors, without using ``script-src: unsafe-eval``. 