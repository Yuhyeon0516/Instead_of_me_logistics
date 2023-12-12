export function go_to_scroll_position(position: number) {
    setTimeout(() => {
        window.scrollTo({ top: position, behavior: "auto" });
    }, 300);
}

export function refresh() {
    window.location.reload();
}
