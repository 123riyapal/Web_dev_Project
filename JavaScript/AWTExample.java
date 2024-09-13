import java.awt.*;
import java.awt.event.*;

public class AWTExample extends Frame {
    public AWTExample() {
        // Setting the layout
        setLayout(new FlowLayout());

        // Adding components
        Label lbl = new Label("Enter Name:");
        add(lbl);

        TextField txtField = new TextField(20);
        add(txtField);

        Button btn = new Button("Submit");
        add(btn);

        TextArea txtArea = new TextArea(5, 30);
        add(txtArea);

        Checkbox chkBox = new Checkbox("Accept Terms");
        add(chkBox);

        Choice choice = new Choice();
        choice.add("Option 1");
        choice.add("Option 2");
        choice.add("Option 3");
        add(choice);

        // Event handling for button
        btn.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                txtArea.setText("Name: " + txtField.getText() + "\n" +
                                "Accepted: " + chkBox.getState() + "\n" +
                                "Selected: " + choice.getSelectedItem());
            }
        });

        // Frame settings
        setTitle("AWT Example");
        setSize(350, 250);
        setVisible(true);

        // Closing the window
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        new AWTExample();
    }
}
