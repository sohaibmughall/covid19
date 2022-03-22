import React from 'react';

export default function Button({ title, icon }) {
    return (
        <button class="btn btn-primary btn-icon">
            <i class={icon}></i> {title}
        </button>
    );
}
