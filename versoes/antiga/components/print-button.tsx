"use client";

export function PrintButton() {
  return <button type="button" className="primary-button print-button" onClick={() => window.print()}>Salvar como PDF <span>↗</span></button>;
}
