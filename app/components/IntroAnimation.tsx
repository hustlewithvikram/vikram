import React, { useEffect, useRef, useState } from "react";
import "../globals.css";

interface IntroAnimationProps {
  setIntroFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function IntroAnimation(props: IntroAnimationProps) {
<<<<<<< HEAD
  const textInputRef = useRef<HTMLHeadingElement | null>(null);
=======
  const textInputRef = useRef(null);
>>>>>>> a5ae205810606763233ea4490fd079298ec2c08f
  const hello = [
    "Hello",
    "नमस्ते",
    "Hola",
    "Bonjour",
    "你好",
    "こんにちは",
    "வணக்கம்",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
<<<<<<< HEAD
  const [isFinished, setIsFinished] = useState(false);
=======
  const [isFinished, setIsFinished] = useState(false); // Track when animation is finished
>>>>>>> a5ae205810606763233ea4490fd079298ec2c08f

  const typingSpeed = isDeleting ? 60 : 90;

  function typeHello() {
    const currentWord = hello[wordIndex];

<<<<<<< HEAD
    if (textInputRef.current) {
      if (!isDeleting && charIndex < currentWord.length) {
        textInputRef.current.innerText += currentWord.charAt(charIndex);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        textInputRef.current.innerText = currentWord.substring(0, charIndex - 1);
        setCharIndex(charIndex - 1);
      } else {
        if (!isDeleting && charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 100);
        } else if (isDeleting && charIndex === 0) {
          if (wordIndex < hello.length - 1) {
            setIsDeleting(false);
            setWordIndex(wordIndex + 1);
          } else {
            setIsFinished(true);
            props.setIntroFinished(true);
          }
=======
    if (!isDeleting && charIndex < currentWord.length) {
      textInputRef.current.innerText += currentWord.charAt(charIndex);
      setCharIndex(charIndex + 1);
    } else if (isDeleting && charIndex > 0) {
      textInputRef.current.innerText = currentWord.substring(0, charIndex - 1);
      setCharIndex(charIndex - 1);
    } else {
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 100); // Wait before deleting
      } else if (isDeleting && charIndex === 0) {
        if (wordIndex < hello.length - 1) {
          // Move to next word if not the last word
          setIsDeleting(false);
          setWordIndex(wordIndex + 1);
        } else {
          // If it's the last word, mark the animation as finished
          setIsFinished(true);
          props.setIntroFinished(true);
>>>>>>> a5ae205810606763233ea4490fd079298ec2c08f
        }
      }
    }
  }

  useEffect(() => {
    if (!isFinished) {
      const typingTimeout = setTimeout(() => {
        typeHello();
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
<<<<<<< HEAD
    } else if (textInputRef.current) {
=======
    } else {
>>>>>>> a5ae205810606763233ea4490fd079298ec2c08f
      textInputRef.current.classList.add("fade-out");
    }
  }, [charIndex, isDeleting, wordIndex, isFinished]);

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <h1 ref={textInputRef} className="text-white md:text-9xl text-2xl"></h1>
    </div>
  );
}
