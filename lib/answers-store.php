<?php

namespace hastdueier;

class AnswersStore
{

    private static $instance;

    public static function instance()
    {
        if (!isset(static::$instance)) {
            static::$instance = new AnswersStore();
        }

        return static::$instance;
    }

    private static function loadAnswers()
    {
        $string = file_get_contents(dirname(dirname(__FILE__)) . '/data/answers.json');
        return json_decode($string, true);
    }

    private $answers;

    public function __construct()
    {
        $this->answers = static::loadAnswers();
    }

    public function random()
    {
        return $this->answers[array_rand($this->answers)];
    }
}
