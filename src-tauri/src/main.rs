#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    #[cfg(desktop)]
    openbar_client_lib::run();
}
