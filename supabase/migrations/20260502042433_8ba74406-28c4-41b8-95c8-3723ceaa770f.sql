
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  business TEXT,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  interest TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone (including unauthenticated visitors) can submit an inquiry
CREATE POLICY "Anyone can submit a contact inquiry"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(name)) >= 2 AND length(name) <= 100
    AND length(trim(phone)) >= 7 AND length(phone) <= 20
    AND length(trim(email)) >= 5 AND length(email) <= 255
    AND length(trim(message)) >= 5 AND length(message) <= 1000
    AND (business IS NULL OR length(business) <= 120)
    AND (interest IS NULL OR length(interest) <= 120)
  );

-- No SELECT policy: submissions are private and only visible via the backend dashboard
