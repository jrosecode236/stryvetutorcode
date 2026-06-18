/* ─────────────────────────────────────────────
   STRYDE — Supabase client
───────────────────────────────────────────── */

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://zeidlbfznuksqgasjred.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DnwTmAznAURf0vUcRU06Vg_OtlFJbMZ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── AUTH HELPERS ──────────────────────────────

export async function signUp({ email, password, meta }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: meta }
  });
  return { data, error };
}

export async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// ── NAV AUTH STATE ────────────────────────────
// Call this on every page to show login/logout in the nav.
export async function initNav() {
  const user = await getUser();
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  const accountLink = navLinks.querySelector('.nav-account');
  const signupLink = navLinks.querySelector('.nav-signup');

  if (user) {
    if (signupLink) signupLink.style.display = 'none';
    if (!accountLink) {
      const a = document.createElement('a');
      a.href = 'dashboard.html';
      a.className = 'btn btn-outline-nav nav-account';
      a.textContent = 'My Account';
      navLinks.appendChild(a);
    }

    const logoutBtn = navLinks.querySelector('.nav-logout');
    if (!logoutBtn) {
      const btn = document.createElement('button');
      btn.className = 'btn btn-ghost-nav nav-logout';
      btn.textContent = 'Log out';
      btn.onclick = async () => {
        await signOut();
        window.location.href = 'index.html';
      };
      navLinks.appendChild(btn);
    }
  } else {
    if (accountLink) accountLink.remove();
    const logoutBtn = navLinks.querySelector('.nav-logout');
    if (logoutBtn) logoutBtn.remove();
  }
}
