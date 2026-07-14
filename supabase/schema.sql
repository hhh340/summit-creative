-- Run this in the Supabase SQL editor for your project.
-- Row Level Security is enabled with no public policies: all reads/writes
-- happen server-side via the service role key, which bypasses RLS.

create extension if not exists "pgcrypto";

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'archived'))
);

alter table contact_submissions enable row level security;

create table if not exists quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  website_type text not null,
  timeline text not null,
  domain_status text not null,
  idea text not null,
  status text not null default 'new' check (status in ('new', 'reviewing', 'quoted', 'won', 'lost'))
);

alter table quote_requests enable row level security;

create index if not exists contact_submissions_created_at_idx on contact_submissions (created_at desc);
create index if not exists quote_requests_created_at_idx on quote_requests (created_at desc);
