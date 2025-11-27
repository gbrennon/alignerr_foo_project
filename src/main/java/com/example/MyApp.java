package com.example;

import io.dropwizard.Application;
import io.dropwizard.configuration.EmptyConfiguration;
import io.dropwizard.setup.Environment;

public class MyApp extends Application<EmptyConfiguration> {
    @Override
    public void run(EmptyConfiguration configuration, Environment environment) throws Exception {
        // This is a minimal implementation
    }

    public static void main(String[] args) throws Exception {
        new MyApp().run(args);
    }
}
