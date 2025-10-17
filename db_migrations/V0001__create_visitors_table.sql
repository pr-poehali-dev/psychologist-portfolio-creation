CREATE TABLE IF NOT EXISTS visitors (
    id SERIAL PRIMARY KEY,
    visit_date DATE NOT NULL DEFAULT CURRENT_DATE,
    visit_count INTEGER NOT NULL DEFAULT 1,
    UNIQUE(visit_date)
);

CREATE INDEX idx_visit_date ON visitors(visit_date);

INSERT INTO visitors (visit_date, visit_count) VALUES (CURRENT_DATE, 0)
ON CONFLICT (visit_date) DO NOTHING;