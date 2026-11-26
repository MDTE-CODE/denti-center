import os

IGNORE = {
    "node_modules",
    ".next",
    ".git",
    "dist",
    "build",
    ".vercel",
    ".turbo",
}

def show_tree(path=".", prefix=""):
    entries = sorted(
        [e for e in os.listdir(path) if e not in IGNORE],
        key=lambda e: (not os.path.isdir(os.path.join(path, e)), e.lower())
    )

    for index, entry in enumerate(entries):
        full_path = os.path.join(path, entry)
        is_last = index == len(entries) - 1

        print(prefix + ("└── " if is_last else "├── ") + entry)

        if os.path.isdir(full_path):
            show_tree(full_path, prefix + ("    " if is_last else "│   "))

print(os.path.basename(os.path.abspath(".")))
show_tree()