import React from 'react';

// GEO: Helper component to safely inject JSON-LD schema objects into the page head.
export default function JsonLd({ schema }: { schema: Record<string, unknown> }) {
    if (!schema) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
